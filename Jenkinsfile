pipeline {
    agent {
        docker {
            image 'node:17-alpine3.12'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('start') {
            steps {
                sh 'npm start'
            }
        }
    }
}