import swaggerJs from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export default app => {
	const swaggerOptions = {
		swaggerDefinition: {
			info: {
				title: "API Documentation",
				description: "API Documentation",
				contact: {
					name: "API Support",
					url: "https://swagger.io/support/",
					email: "",
				},
				servers: ["http://localhost:4000"],
				version: "1.0.0",
				license: {
					name: "MIT",
					url: "https://choosealicense.com/licenses/mit/",
				},
			},
		},
		basePath: "/",
		apis: ["./src/views/*.js"],
	};

	const swaggerDocs = swaggerJs(swaggerOptions);
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
