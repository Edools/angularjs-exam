if [ "$NODE_ENV" = "" ] || [ "$NODE_ENV" = "development" ]; then  
  gulp
  exit 0
fi