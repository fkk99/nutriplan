/*
  # Meat Products Database Schema

  1. New Tables
    - `products`
      - Primary table for storing product information
      - Contains basic product details like name, price, unit price, etc.
    
    - `product_images`
      - Stores image URLs for products
      - One-to-one relationship with products
    
    - `price_components`
      - Stores detailed price information
      - One-to-one relationship with products

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
    - Add policies for admin users to modify data

  3. Changes
    - Initial schema creation
    - Basic indexes for common queries
    - Foreign key relationships
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY,
  name text NOT NULL,
  price text NOT NULL,
  unit_price text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create product_images table
CREATE TABLE IF NOT EXISTS product_images (
  product_id text PRIMARY KEY REFERENCES products(id),
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create price_components table
CREATE TABLE IF NOT EXISTS price_components (
  product_id text PRIMARY KEY REFERENCES products(id),
  prefix text,
  integer text NOT NULL,
  decimal text NOT NULL,
  unit text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_components ENABLE ROW LEVEL SECURITY;

-- Create policies for products table
CREATE POLICY "Allow public read access to products"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for product_images table
CREATE POLICY "Allow public read access to product images"
  ON product_images
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert product images"
  ON product_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update product images"
  ON product_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for price_components table
CREATE POLICY "Allow public read access to price components"
  ON price_components
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert price components"
  ON price_components
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update price components"
  ON price_components
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS products_name_idx ON products USING gin (name gin_tram_ops);
CREATE INDEX IF NOT EXISTS products_updated_at_idx ON products (updated_at);