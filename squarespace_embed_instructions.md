# How to Embed Heritage Lens Agent on Your Squarespace Site

This guide provides the exact HTML code and steps to display your Streamlit app (`https://heritagelensagent.streamlit.app/`) directly on your Squarespace website (`https://larissaterranova.com/`).

Since the **Heritage Lens Agent** is a detailed, three-panel dashboard (The Answer, Sources, and What the System Doesn't Know), the best way to present it is as a **dedicated page** (e.g., your "Heritage Lens" page) or a full-width section.

---

## The Embed Code

Copy the following HTML/CSS code snippet to use in Squarespace. This code creates a responsive container that adjusts to desktop and mobile screens while maintaining a clean, borderless appearance.

```html
<div class="streamlit-embed-container" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; min-height: 800px; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.1);">
  <iframe 
    src="https://heritagelensagent.streamlit.app/?embed=true" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="clipboard-write"
    allowfullscreen>
  </iframe>
</div>
```

> [!TIP]
> The `?embed=true` query parameter at the end of your Streamlit URL is a built-in Streamlit feature. It hides the default Streamlit header, footer, and sidebars, making it look like an integrated part of your website.

---

## Step-by-Step Squarespace Setup

Follow these steps to add the chat page to your site:

### Step 1: Create the Page
1. Log in to your **Squarespace Account** and open your site editor.
2. Go to **Pages** in the left menu.
3. Click the **+** (plus) icon to add a new page (select **Blank Page**).
4. Name the page **Heritage Lens** (or **Search Archive**).

### Step 2: Add a Code Block
1. On the new page, click **Edit** in the top-left corner of the page preview.
2. Click **Add Section**, and choose a blank section.
3. Click **Add Block** and select **Code** (do not use "Embed" as the custom code block is more reliable for HTML code).
4. Drag and resize the Code Block to span the full width of your page layout.

### Step 3: Paste the Code
1. Double-click the **Code Block** to open the editor.
2. Ensure the format dropdown is set to **HTML**.
3. Toggle **Display Source** to **Off** (if prompted).
4. Delete any default text in the block and paste the HTML snippet above.
5. Click **Save** in the top-left corner to publish the changes.

---

## Customization Options

* **Adjusting Height:** You can change `min-height: 800px;` in the style attribute if you want the app panel to be taller or shorter on your page.
* **Adding Borders/Shadows:** You can adjust `box-shadow` or `border-radius` to match your Squarespace site design.
