import re
import os
from flask import Flask, render_template, request, flash

app = Flask(__name__)

# Set the PDF path using a raw string to handle backslashes correctly
PDF_PATH = r"C:\Users\ALPHY BABY\Desktop\Trendall Project\RVP_compressed.pdf"

@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'POST':
        keyword = request.form.get('keyword', 'PLATE')  # Default keyword is 'PLATE'
        if not keyword:
            flash("Please enter a keyword to search.", "warning")
            return render_template("index.html", text_data=[])

        try:
            # Assuming use of pdfminer.six for PDF text extraction
            from pdfminer.high_level import extract_text
            text = extract_text(PDF_PATH)
            index = text.find("GENERAL INTRODUCTION")
            if index == -1:
                flash("Introduction section not found in the document.", "error")
                return render_template("index.html", text_data=[])

            sentences = extract_sentences(text[index:], keyword)
            if not sentences:
                flash(f"No sentences found containing the keyword '{keyword}'.", "info")
            return render_template("index.html", text_data=sentences)
        except Exception as e:
            flash(f"An error occurred: {str(e)}", "error")
            return render_template("index.html", text_data=[])
    else:
        return render_template("index.html", text_data=[])

def extract_sentences(text, keyword):
    sentence_list = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', text)
    return [sentence for sentence in sentence_list if keyword.lower() in sentence.lower()][:50]

if __name__ == '__main__':
    app.run(debug=True)