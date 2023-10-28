pipeline {
    agent any
    tools {
        nodejs "node" // "tools" should be used instead of "tool"
    }
    stages {
        stage("Install dependency") {
            steps {
                sh "npm install"
            }
        }
        stage("Running tests") {
            steps {
                sh 'npm run test'
            }
        }
        stage("Build the Docker Image") {
            steps {
                script {
                    // You need to specify the Docker image name and tag, e.g., "my-image:latest"
                    def dockerImage = docker.build("my-image:latest")
                }
            }
        }
    }
}
