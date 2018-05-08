#Simple admin web interface

Web interace for [https://github.com/morrah77/simple-admin](https://github.com/morrah77/simple-admin)

Based on [Create React App](https://github.com/facebookincubator/create-react-app)

#Build
`npm run build && \
docker build -t simple-admin-frontend:latest -f Dockerfile .`

#Run
`docker run --rm -d --name simple-admin-frontend -v <path_to_your_config.json>:/usr/share/nginx/html/config.json [-p <port>:80] simple-admin-frontend`

###Example
 `docker run --rm -d --name simple-admin-frontend -v /home/user/simple-admin/config-dev.json:/usr/share/nginx/html/config.json -p 8080:80 simple-admin-frontend`

##Example of config.json
```
{
  "apiUrl":"http://localhost:8080"
}
```

#Push
`docker push simple-admin-frontend:latest`
