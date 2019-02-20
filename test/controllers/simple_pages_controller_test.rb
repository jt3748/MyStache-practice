require 'test_helper'

class SimplePagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get simple_pages_index_url
    assert_response :success
  end

  test "should get products" do
    get simple_pages_products_url
    assert_response :success
  end

  test "should get contact" do
    get simple_pages_contact_url
    assert_response :success
  end

  test "should get gallery" do
    get simple_pages_gallery_url
    assert_response :success
  end

end
