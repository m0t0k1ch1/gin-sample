package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()
	app.StaticFile("/", "dist/index.html")
	app.StaticFS("/static", gin.Dir("dist", false))
	app.Run(":8080")
}
