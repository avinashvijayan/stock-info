pipeline {
    agent { label 'master'}
    stages {
        stage('Checkout') {
            steps {
                git branch:'master', url:"https://github.com/avinashvijayan/stock-info.git"
            }
        }
         stage('Install package') {
            steps {
                npm i 
            }
        }
         stage('Build') {
            steps {
                npm run build
            }
        }
         stage('Deploy') {
            steps {
                npm run start
            }
        }
    }
}