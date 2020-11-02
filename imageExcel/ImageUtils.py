# import os
# from PIL import Image 
# from PIL import Image,ImageEnhance

# class ImageUtils:
#     """ 图片处理工具 """
#     def __init__(self, source_dir, target_dir):
#         self.source_dir = source_dir
#         self.target_dir = target_dir

#     def thumbnail(self, filename, percent=0.5):
#         # '缩略图'
#         im = Image.open(os.path.join(self.source_dir, filename))
#         w, h = im.size
#         print('Original image size: %sx%s' % (w, h))
#         im.thumbnail((int(w*percent), int(h*percent)))
#         print('Thumbnail image to: %sx%s' % (int(w*percent), int(h*percent)))
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-thumbnail.jpg')
#         im.save(output, 'jpeg')

#     def resize(self, filename, horizontal_ratio=0.5, vertical_ratio=0.5):
#         '调整大小'
#         im = Image.open(os.path.join(self.source_dir, filename))
#         w, h = im.size
#         print('Original image size: %sx%s' % (w, h))
#         im_size = im.resize((int(w*horizontal_ratio), int(h*vertical_ratio)))
#         print('Resize image to: %sx%s' % (int(w*horizontal_ratio), int(h*vertical_ratio)))
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-resize.jpg')
#         im_size.save(output, 'jpeg')

#     def enhance(self, filename, enhance_ratio=1.3):
#         '图片对比度增强'
#         im = Image.open(os.path.join(self.source_dir, filename))
#         enh = ImageEnhance.Contrast(im)
#         print(f'图像对比度增强: {enhance_ratio}倍')
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-enhance.jpg')
#         enh.enhance(enhance_ratio).save(output, 'jpeg')

#     def region(self, filename, snap=(0.1, 0.1, 0.9, 0.9)):
#         '截取一块区域'
#         im = Image.open(os.path.join(self.source_dir, filename))
#         w, h = im.size
#         box = (int(w*snap[0]), int(h*snap[1]), int(w*snap[2]), int(h*snap[3]))
#         print(f'图像截取区域: {box}')
#         region = im.crop(box)
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-region.jpg')
#         region.save(output, 'jpeg')

#     def rotate(self, filename, angle=0):
#         '旋转图片，翻转'
#         im = Image.open(os.path.join(self.source_dir, filename))
#         print(f'图像旋转: {angle}°')
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-rotate.jpg')
#         im.rotate(angle).save(output, 'jpeg')

#     def flip(self, filename, horizontal=False, vertical=False):
#         '翻转'
#         im = Image.open(os.path.join(self.source_dir, filename))
#         if horizontal:
#             print('图像水平翻转')
#             im = im.transpose(Image.FLIP_LEFT_RIGHT)
#         if vertical:
#             print('图像上下翻转')
#             im = im.transpose(Image.FLIP_TOP_BOTTOM)
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-flip.jpg')
#         im.save(output, 'jpeg')

#     def add_logo(self, filename, logo_file):
#         '添加水印'
#         im_logo = Image.open(os.path.join(self.source_dir, logo_file))
#         logo_width, logo_height = im_logo.size
#         im_target = Image.open(os.path.join(self.source_dir, filename))
#         target_width, target_height = im_target.size
#         im_copy = im_target.copy()
#         print('图像添加水印')
#         im_copy.paste(im_logo, (target_width-logo_width, target_height-logo_height), im_logo)
#         output = os.path.join(self.target_dir, filename.split('.')[0]+'-add_logo.jpg')
#         im_copy.save(output, 'jpeg')

#     def new_image(self, text='Text'):
#         '创建新图片'
#         im_new = Image.new('RGBA', (400, 400), 'white')
#         print('创建新图片')
#         pic = ImageDraw.Draw(im_new)
#         print('图片添加文字')
#         pic.text((50, 50), text, fill='blue')
#         output = os.path.join(self.target_dir, 'new_image.png')
#         im_new.save(output)

#     def msyh_font(self, text='文字'):
#         '设置字体'
#         im_new = Image.new('RGBA', (400, 400), 'white')
#         pic = ImageDraw.Draw(im_new)
#         fonts_path = r'D:\VSCode\xuan_demo_v0302\fonts\msyh.ttf'
#         msyh = ImageFont.truetype(fonts_path, 40)
#         print('文字格式为微软雅黑')
#         pic.text((50, 50), text, fill='blue', font=msyh)
#         output = os.path.join(self.target_dir, 'new_image_msyh.png')
#         im_new.save(output)