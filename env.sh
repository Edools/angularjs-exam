if [ "$NODE_ENV" = "" ] || [ "$NODE_ENV" = "development" ]; then  
  npm install
  gulp
  exit 0
fi