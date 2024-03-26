from bs4 import BeautifulSoup

def check_open_and_close_tags(html_code):
    # Create a BeautifulSoup object with the HTML code
    soup = BeautifulSoup(html_code, 'html.parser')


    # Find all tags in the HTML document
    all_tags = soup.find_all()
    tag_stack = []

    # Check for open and close tags
    for tag in all_tags:
        tag_stack.append(tag.name)
        print(tag, end = "\n")
        print()

          


# Example HTML code
html_code = """
<html>
<head>
    <title>Example

<body>
    <h1>test
    <p>Hello, <strong>World</strong>!


</body>
</html>
"""

# Call the function to check open and close tags
check_open_and_close_tags(html_code)
