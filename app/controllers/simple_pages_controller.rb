class SimplePagesController < ApplicationController
  def index
    @photos = Photo.all
  end

  def products
  end

  def contact
  end

  def gallery
  end
end
