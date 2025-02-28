/*
  # Additional Schema for Meat Products

  1. New Tables
    - `categories`
      - For grouping products (e.g., beef, pork, chicken)
    - `product_categories`
      - Junction table for product-category relationships
    - `nutritional_info`
      - Store nutritional information for products
    - `product_tags`
      - For storing additional product attributes (e.g., organic, local)

  2. Security
    - Enable RLS on all new tables
    - Add appropriate access policies

  3. Changes
    - Additional schema to complement existing product tables
    - New indexes for performance
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create product_categories junction table
CREATE TABLE IF NOT EXISTS product_categories (
  product_id text REFERENCES products(id),
  category_id uuid REFERENCES categories(id),
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (product_id, category_id)
);

-- Create nutritional_info table
CREATE TABLE IF NOT EXISTS nutritional_info (
  product_id text PRIMARY KEY REFERENCES products(id),
  serving_size text,
  calories_per_serving integer,
  protein_g decimal(5,2),
  fat_g decimal(5,2),
  carbs_g decimal(5,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create product_tags table
CREATE TABLE IF NOT EXISTS product_tags (
  product_id text REFERENCES products(id),
  tag text NOT NULL,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (product_id, tag)
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE nutritional_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for categories
CREATE POLICY "Allow public read access to categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert categories"
  ON categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policies for product_categories
CREATE POLICY "Allow public read access to product_categories"
  ON product_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert product_categories"
  ON product_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policies for nutritional_info
CREATE POLICY "Allow public read access to nutritional_info"
  ON nutritional_info
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert nutritional_info"
  ON nutritional_info
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policies for product_tags
CREATE POLICY "Allow public read access to product_tags"
  ON product_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert product_tags"
  ON product_tags
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS categories_name_idx ON categories (name);
CREATE INDEX IF NOT EXISTS product_tags_tag_idx ON product_tags (tag);
CREATE INDEX IF NOT EXISTS nutritional_info_calories_idx ON nutritional_info (calories_per_serving);

-- Insert default categories
INSERT INTO categories (name, description) VALUES
  ('Beef', 'Beef and veal products'),
  ('Pork', 'Pork products'),
  ('Chicken', 'Chicken and poultry products'),
  ('Fish', 'Fish and seafood products'),
  ('Processed Meats', 'Sausages, cold cuts, and other processed meats'),
  ('Vegetarian', 'Meat alternatives and vegetarian products')
ON CONFLICT DO NOTHING;