# cpfApi

## Postman JSON
{
	"id": "2d3af66c-35e2-7729-9921-6a1f9d5debed",
	"name": "CPF REST API",
	"description": "CPF Rest API for mocking cpf validation at front end projects",
	"order": [
		"d76f110e-c957-8196-d059-9e961ca570f4",
		"06c97fb7-1577-3c3c-462a-baf3626f4638"
	],
	"folders": [],
	"folders_order": [],
	"timestamp": 1503636257235,
	"owner": "1968288",
	"public": false,
	"requests": [
		{
			"id": "06c97fb7-1577-3c3c-462a-baf3626f4638",
			"headers": "",
			"headerData": [],
			"url": "http://localhost:3000/getPersonByCpf/047.182.871-89/1993-02-27",
			"queryParams": [],
			"pathVariables": {},
			"pathVariableData": [],
			"preRequestScript": null,
			"method": "GET",
			"collectionId": "2d3af66c-35e2-7729-9921-6a1f9d5debed",
			"data": null,
			"dataMode": "params",
			"name": "GetPersonByCpf",
			"description": "",
			"descriptionFormat": "html",
			"time": 1503636801583,
			"version": 2,
			"responses": [],
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {}
		},
		{
			"id": "d76f110e-c957-8196-d059-9e961ca570f4",
			"headers": "Content-Type: application/json\n",
			"headerData": [
				{
					"key": "Content-Type",
					"value": "application/json",
					"description": "",
					"enabled": true
				}
			],
			"url": "http://localhost:3000/insertPerson",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "POST",
			"data": [],
			"dataMode": "raw",
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1503636657015,
			"name": "InsertPerson",
			"description": "params: {\n\tcpf: String do cpf,\n\tbirthDate: Formato de timestamp sem horas\n}",
			"collectionId": "2d3af66c-35e2-7729-9921-6a1f9d5debed",
			"responses": [],
			"rawModeData": "{\n\t\"cpf\": \"047.182.871-89\",\n\t\"birthDate\": \"1993-02-27\",\n\t\"name\": \"Felipe Sampaio Marques Souza\",\n\t\"fatherName\": \"Erivaldo Marques Souza\",\n\t\"motherName\": \"Maria Jose Sampaio\"\n}"
		}
	]
}
