import {kebabToCamelCase} from "../../../cli-common";

export const indexHtmlTemplate = (appName: string) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>${kebabToCamelCase(appName)}</title>

    <!-- main application logic entry-point -->
    <script src="component/${appName}-app/${appName}-app.tsx"></script>

</head>
<body>
    <${appName}-app />
</body>
</html>`;