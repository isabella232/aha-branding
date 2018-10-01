# Aha Branding
## Purpose
This holds the branding styles for the Genesys Aha ideas portal. This helps us maintain control of the branding and gives us version history.

All three products have their own portals and this code has be structured to ensure consistency and minimize duplication.

## Portal Branding
### Instructions
We should not be editing the styles directly on the Aha site. All changes should be made here first and then copied to the idea portals.

To update the portal branding.
1. Navigate to the portal for a product. (ex. PureConnect)
2. Click Configure Portal > Portal Branding Tab (You will need admin access for this.)
3. Copy contents of custom.html into the Custom Header field.
4. Copy contents of custom.css into the Custom CSS field.
5. Copy contents of custom.js into the Custom Javascript Field.
6. Click save.
7. Repeate steps 1-6 for remaining portals.

### Components
*Custom.html*
This is the html template for the header and should be identical for all product portals except for the logo and title. Simply change the css class of each (ex. pureconnect-logo and pureconnect-title) for each portal to pull in the appropriate content.

*custom.css*
This is the css class that will be included in the header and affects the styles for the entire page. All styles should go into this file and it should be identical for each portal. If there are any styles that are specific to a product they should be included in this stylesheet and should use a selector that contains that product name.

*custom.js*
This is the code that actually puts the individual logo and title into the header. It uses jquery to find the title and logo selector and appends the appropriate html.

## Email Branding
Aha does not give us total control of the email so we have to be quite creative to customize the format the way we want, and there are lots of limitations to what we can do. When editing the email templates make sure to test at a minimum in outlook and attempt to forward to another email address.

There are four email templates for each of the emails Aha sends out. They are **New Idea**, **Status Changed**, **Admin Response**, and **New Comment**.

`node email\emailTemplateGen.js` will generate the email bodies for each template for each portal under the `email\gen` directory. This will modify the portal links appropriately so that it does not need to be done manually. You can then copy the generated file to the appropriate email body field in Aha. For example, the contents of **pureconnect admin response.txt** can be copied to the Admin Reponse email body field in the PureConnect portal.

Email template.css holds the email stylesheet and can be used for all email templates. It should be copied into the **Custom Email Css** field on the product portal.

## Images
All images used in branding can be found in the Aha Branding Resources workflow. This workflow is just a placeholder that allows us to attach as many images or other resources we need for branding. These resources can then be linked from the branding templates.