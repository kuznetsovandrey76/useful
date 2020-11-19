## Main commands
```
# {start|stop|status|restart|force-reload}  
sudo service jenkins status
```  

## Start Jenkins
http://0.0.0.0:8080/  
http://localhost:8080/  

## Help
if you run docker-compose on port 8080 you need `docker-compose down`

## Plugins
-	Pipeline
- Pipeline Utility Steps
- Blue Ocean
- NodeJS

```
# Pipeline Utility Steps
def config = readYaml file: './src/config.yaml'
/var/lib/jenkins/workspace/PIPLINE-NAME/src/config.yaml
```

## Permission
sudo chown -R jenkins:jenkins /var/log/jenkins
sudo chown -R jenkins:jenkins /var/lib/jenkins
sudo chown -R jenkins:jenkins /var/cache/jenkins
