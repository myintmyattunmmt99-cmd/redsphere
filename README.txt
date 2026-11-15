ReadSphere Digital Library — project files

Files:
- index.html: Home page
- books.html: Books page (6 responsive book cards)
- membership.html: Membership benefits and inquiry form
- script.js: Client-side validation and dynamic success behaviour
- images/: six locally stored SVG book-cover illustrations

Run:
1. Extract the ZIP.
2. Open index.html in a modern browser. Internet access is required for Bootstrap 5 CDN and Google Fonts.
3. Navigate using Home, Books and Membership.

Validation implemented:
- Required fields: full name, email, password, confirm password, contact number and membership ID.
- Email: trims whitespace, exactly one @, valid basic address structure.
- Password confirmation: must match.
- Contact number: digits and hyphens only, maximum 11 digits excluding hyphens.
- Membership ID: RS- followed by four digits.
- Invalid fields are highlighted; submission is prevented. A valid form displays a success message, clears fields and does not reload the page.

Note: This is a front-end demonstration. It does not store member details or send data to a server.
