pipeline {
    agent{ label 'Built-In'}
    stages {
        stage('Checkout') {
            steps {
                git branch:'master', url:"https://github.com/avinashvijayan/stock-info.git"
            }
        }
         stage('Install package') {
            steps {
                bat 'npm i' 
            }
        }
         stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
         stage('Deploy') {
            steps {
                bat 'npm run start'
            }
        }
    }
}