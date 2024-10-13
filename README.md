
### 在本地环境部署 IPFS 节点

为了避免文件上传到 IPFS 失败，请确保在本地环境中部署 IPFS 节点。

#### Windows 用户安装 IPFS
- 下载并安装 [IPFS Desktop](https://github.com/ipfs/ipfs-desktop/releases)。
- 建议版本：**IPFS-Desktop-Setup-0.38.0.exe**。

#### 默认端口配置
- 上传端口：**5001**
- 查看端口：**8080**

你可以在 IPFS 的配置文件中修改这些端口，同时也需要在项目的 `.env` 文件中进行相应的修改。

#### 关于 `.env` 文件
为了方便查看，`.env` 文件不会在项目中隐藏。然而，在正常情况下，`.env` 文件应 **避免上传到 Git**，以防止泄露敏感信息。

