# retire les <a:pPr> en milieu de paragraphe (quirk pptxgenjs : runs mixtes dans une puce)
import sys, zipfile, re, shutil, os
src = sys.argv[1]; tmp = src + ".tmp"
pat = re.compile(r'</a:r><a:pPr indent="0" marL="0"><a:buNone/></a:pPr><a:r>')
n = 0
with zipfile.ZipFile(src) as zin, zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if item.filename.startswith("ppt/slides/slide") and item.filename.endswith(".xml"):
            s = data.decode("utf8"); s2, k = pat.subn("</a:r><a:r>", s); n += k; data = s2.encode("utf8")
        zout.writestr(item, data)
shutil.move(tmp, src); print("pPr retirés :", n)
