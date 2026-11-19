A LITTLE SOMETHING FOR ARUN — starter website

FILES
- index.html: all page content and the places where you add your words/photos
- style.css: colours, layout and design
- script.js: gift-opening and section navigation

PREVIEW
Open index.html in a browser, or upload all three files to a GitHub repository and enable GitHub Pages.

ADD PHOTOS
1. Create a folder named photos in the same project.
2. Upload your photos into that folder, for example photo1.jpg and photo2.jpg.
3. In index.html, find the photo-grid section and replace a placeholder like:
   <div class="photo-placeholder"><span>＋</span><small>Add your first photo</small></div>
   with:
   <img class="memory-photo" src="photos/photo1.jpg" alt="A favourite memory">
4. Add this CSS rule to the bottom of style.css:
   .memory-photo { width: 100%; height: 160px; object-fit: cover; border-radius: 15px; }

EDIT YOUR LETTER AND NOTES
Open index.html and replace the sample text in the letter, Open When notes, and surprise messages with your own words.

PRIVACY
A normal GitHub Pages website is public to anyone who has its URL, and the URL can be forwarded. Do not upload private or sensitive photos. This starter template does not include password protection or private login.
