pipeline {
    agent any
    tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
    }
    stages {
        stage('Install Dependency') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm.cmd install'
                    }
                }
            }
        }

    }
}
