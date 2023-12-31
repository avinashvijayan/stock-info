pipeline {
    agent { label 'master'}
    stages {
        stage('Checkout') {
            steps {
                git branch 'master' url:"https://github.com/avinashvijayan/stock-info.git"
            }
        }
         stage('Install package') {
            steps {
                batch npm i 
            }
        }
         stage('Build') {
            steps {

            }
        }
         stage('Test') {
            steps {

            }
        }
         stage('Deploy') {
            steps {

            }
        }
    }
}