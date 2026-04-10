#!/usr/bin/env python3
"""
PPTX 解析器 — 提取幻灯片文字、图片路径及幻灯片-图片映射关系
用法: python ppt_parser.py <path/to/file.pptx>
输出: JSON 到 stdout
"""
import sys
import os
import json
import zipfile
import tempfile
import re
from xml.etree import ElementTree as ET

def extract_text(slide_xml_path):
    """从单张幻灯片 XML 提取所有文字，返回 (title, body_lines)"""
    tree = ET.parse(slide_xml_path)
    root = tree.getroot()
    NS_A = 'http://schemas.openxmlformats.org/drawingml/2006/main'
    paragraphs = []
    for para in root.iter(f'{{{NS_A}}}p'):
        runs = [t.text for t in para.iter(f'{{{NS_A}}}t') if t.text]
        text = ''.join(runs).strip()
        if text:
            paragraphs.append(text)
    title = paragraphs[0] if paragraphs else ''
    body = paragraphs[1:] if len(paragraphs) > 1 else []
    return title, body

def extract_image_refs(rels_xml_path):
    """从 slide_rels 文件提取本张幻灯片引用的图片文件名列表"""
    if not os.path.exists(rels_xml_path):
        return []
    tree = ET.parse(rels_xml_path)
    root = tree.getroot()
    images = []
    for rel in root:
        target = rel.get('Target', '')
        if '../media/' in target:
            images.append(os.path.basename(target))
    return images

def parse(pptx_path):
    tmp_dir = tempfile.mkdtemp(prefix='pptx_')
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            z.extractall(tmp_dir)

        slides_dir  = os.path.join(tmp_dir, 'ppt', 'slides')
        rels_dir    = os.path.join(slides_dir, '_rels')
        media_dir   = os.path.join(tmp_dir, 'ppt', 'media')

        # 按幻灯片序号排序
        slide_files = sorted(
            [f for f in os.listdir(slides_dir) if re.match(r'slide\d+\.xml$', f)],
            key=lambda x: int(re.search(r'\d+', x).group())
        )

        slides = []
        for sf in slide_files:
            idx   = int(re.search(r'\d+', sf).group())
            title, body = extract_text(os.path.join(slides_dir, sf))
            rels_file   = os.path.join(rels_dir, sf + '.rels')
            images      = extract_image_refs(rels_file)
            slides.append({
                'index':  idx,
                'title':  title,
                'body':   body,
                'images': images,
            })

        # 所有媒体文件
        all_images = sorted(os.listdir(media_dir)) if os.path.isdir(media_dir) else []

        result = {
            'pptx_path':  pptx_path,
            'tmp_dir':    tmp_dir,        # 调用方用完后需自行清理
            'media_dir':  media_dir,      # 图片源目录
            'slides':     slides,
            'all_images': all_images,
        }
        print(json.dumps(result, ensure_ascii=False, indent=2))
    except Exception as e:
        # tmp_dir 在出错时保留，便于调试
        print(json.dumps({'error': str(e), 'tmp_dir': tmp_dir}), file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('用法: python ppt_parser.py <path/to/file.pptx>', file=sys.stderr)
        sys.exit(1)
    parse(sys.argv[1])
