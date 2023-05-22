FROM nginx:latest

# 设置静态网站文件
COPY build /usr/share/nginx/html

#对外暴暴露露的端⼝口
EXPOSE 80

# 执行
CMD [ "nginx", "-g", "daemon off;"]
