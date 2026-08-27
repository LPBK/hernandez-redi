import { sql } from './db-client';

export default async (request: Request) => {
  const method = request.method;

  try {
    if (method === 'GET') {
      const properties = await sql`
        SELECT * FROM properties 
        ORDER BY id DESC
      `;
      
      const formatted = properties.map(p => ({
        ...p,
        price: Number(p.price),
        bedrooms: Number(p.bedrooms),
        bathrooms: Number(p.bathrooms),
        area: Number(p.area),
        featured: Boolean(p.featured),
      }));

      return new Response(JSON.stringify(formatted), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (method === 'POST') {
      const body = await request.json();
      const { title, description, price, currency, location, bedrooms, bathrooms, area, type, category, images, featured } = body;
      
      const id = `prop-${Date.now()}`;

      await sql`
        INSERT INTO properties (id, title, description, price, currency, location, bedrooms, bathrooms, area, type, category, images, featured)
        VALUES (${id}, ${title}, ${description}, ${Number(price)}, ${currency}, ${location}, ${Number(bedrooms)}, ${Number(bathrooms)}, ${Number(area)}, ${type}, ${category}, ${images}, ${Boolean(featured)})
      `;

      return new Response(JSON.stringify({ success: true, id }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (method === 'PUT') {
      const body = await request.json();
      const { id, title, description, price, currency, location, bedrooms, bathrooms, area, type, category, images, featured } = body;

      await sql`
        UPDATE properties
        SET title = ${title},
            description = ${description},
            price = ${Number(price)},
            currency = ${currency},
            location = ${location},
            bedrooms = ${Number(bedrooms)},
            bathrooms = ${Number(bathrooms)},
            area = ${Number(area)},
            type = ${type},
            category = ${category},
            images = ${images},
            featured = ${Boolean(featured)}
        WHERE id = ${id}
      `;

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (method === 'DELETE') {
      const url = new URL(request.url);
      const id = url.searchParams.get('id');

      if (!id) {
        return new Response(JSON.stringify({ error: 'ID de propiedad requerido.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      await sql`
        DELETE FROM properties
        WHERE id = ${id}
      `;

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in properties handler:', error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = {
  path: '/api/properties',
};
