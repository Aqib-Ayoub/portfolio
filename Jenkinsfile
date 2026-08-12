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
