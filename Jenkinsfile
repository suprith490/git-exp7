pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/suprith490/node-docker-app.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t node-docker-app:2 .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:8080 node-docker-app:2'
            }
        }
    }
}
