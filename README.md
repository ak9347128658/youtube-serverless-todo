# Setup Instructions

# PlayList Link

[YouTube Playlist](https://www.youtube.com/watch?v=Mc02fnYiBPE&list=PLn0QTzjeSWGzYuWZyQS4S5a-FHIqtwAKV)

## Linux Commands

### Install Java
```sh
sudo apt update
sudo apt install openjdk-17-jre
```

### Install Node.js
```sh
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

### Install Jenkins
```sh
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```

### Permission for Jenkins password
```sh
sudo visudo
```
Add the following line:
```
jenkins ALL=(ALL) NOPASSWD: ALL
```
Save and exit (Ctrl+X, then Y, then Enter).

### Executable script
```sh
npm install
sudo npm run deploy
```










































## Linux Commands

### Install Java
```sh
sudo apt update
sudo apt install openjdk-17-jre
```

### Install Node.js
```sh
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

### Install Jenkins
```sh
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```

### Permission for Jenkins password
```sh
sudo visudo
```
Add the following line:
```
jenkins ALL=(ALL) NOPASSWD: ALL
```
Save and exit (Ctrl+X, then Y, then Enter).

### Executable script
```sh
npm install
sudo npm run deploy
```