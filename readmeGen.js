const readmeGen = ({title, motivation, project, problem, learn, installation}) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${title}</h1>
    <h2>Description</h2>
    <p>${motivation}${project}${problem}${learn}</p>
    <h2>Table of Contents</h2>
    <p>Change this around ${project}</p>
    <h2>Installation</h2>
    <p></>
    <h2>Usage</h2>
    <p></p>
    <h2>License</h>
    <p></p>
    <h2>Contributing Tests</h2>
    <p></p>
    <h2>Questions</h2> 
    <p></p>

</body>
</html>`;
};

export default readmeGen;