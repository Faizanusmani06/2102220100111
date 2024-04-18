import express, { Request, Response } from "express";


const router = express.Router();
router.get("/", async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
		method: 'GET',
		headers: {
			"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEzNDI1MzM2LCJpYXQiOjE3MTM0MjUwMzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU1ZGI1YWU5LTAxN2ItNDFlZi1iYzhmLTk1OWFiMDlmNzI3ZCIsInN1YiI6Im1vaGZhaXphbnZoX2NzZTIxQGl0cy5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJZZXNNYXJ0IiwiY2xpZW50SUQiOiJlNWRiNWFlOS0wMTdiLTQxZWYtYmM4Zi05NTlhYjA5ZjcyN2QiLCJjbGllbnRTZWNyZXQiOiJQZ0h4WEFFeFVOZnFna0FDIiwib3duZXJOYW1lIjoiTW9oIEZhaXphbiIsIm93bmVyRW1haWwiOiJtb2hmYWl6YW52aF9jc2UyMUBpdHMuZWR1LmluIiwicm9sbE5vIjoiMjEwMjIyMDEwMDExMSJ9.pgYm8Wqu3xpQs3rU0dUSH_CrBRZp3dgtsIWjWizU5DQ"
		},
	})

    console.log(response.json())

    return response.json();
		
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ message: "Error fetching hotels" });
    }
  });


  export default router
