import request from "supertest"
import { app } from "./app"

describe("app responds",()=>{
	it("get hi back",()=>{
		request(app)
			.get("/")
			.then(res=>{
				expect(res.text).toBe("hi")
			})
	})
})