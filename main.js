const { webConfig } = require("./web-config");

console.log("i'm alive");
const server = webConfig()
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server in esecuzione sulla porta ${PORT}`);
});