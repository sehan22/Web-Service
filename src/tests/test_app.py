import unittest
from app import app

class TestApp(unittest.TestCase):

  def test_health_check(self):
    response = app.test_client().get("/health")
    self.assertEqual(response.status_code, 200)
    self.assertEqual(response.json, {"status": "healthy"})

# Add other test cases for your implemented functionalities

if __name__ == "__main__":
  unittest.main()