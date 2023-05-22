# 打包 构建
docker build -t my-blog .

# 运行
# 冒号前面是本机端口，冒号后面是虚拟机端口
docker run -p 8090:80 -d --restart=always --name my-blog-container my-blog
