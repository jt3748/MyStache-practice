class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :name
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
