pipeline {
    agent any

    tools {
        nodejs 'node20' // must match a NodeJS installation name configured in Jenkins > Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
        
            steps {
                script{
                    echo "building the docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh 'docker build -t aqibayoubnajar/demo-app:2.0 .'
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh "docker build -t aqibayoubnajar/demo-app:2.0 ."
                    }
                }
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build succeeded — static files are in dist/'
        }
        failure {
            echo 'Build failed — check the console output above.'
        }
    }
}
