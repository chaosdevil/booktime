from django.test import TestCase

# @override_settings(ROOT_URLCONF=__name__)
class CustomHandlerTests(TestCase):
    def test_error_404_handler(self):
        response = self.client.get('/404/')
        self.assertEqual(response.status_code, 404)
        self.assertTemplateUsed(response, '404.html')
        self.assertContains(response, '404 Page not found', status_code=404)

    # def test_error_500_handler(self):
    #     response = self.client.get('/500/')
    #     self.assertEqual(response.status_code, 500)
