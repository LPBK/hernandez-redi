import { sql } from './db-client';

export default async (request: Request) => {
  const method = request.method;

  try {
    if (method === 'GET') {
      const projects = await sql`
        SELECT * FROM projects 
        ORDER BY id DESC
      `;
      return new Response(JSON.stringify(projects), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (method === 'POST') {
      const body = await request.json();
      const { title, location, image } = body;
      
      const id = `proj-${Date.now()}`;

      await sql`
        INSERT INTO projects (id, title, location, image)
        VALUES (${id}, ${title}, ${location}, ${image})
      `;

      return new Response(JSON.stringify({ success: true, id }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (method === 'PUT') {
      const body = await request.json();
      const { id, title, location, image } = body;

      await sql`
        UPDATE projects
        SET title = ${title},
            location = ${location},
            image = ${image}
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
        return new Response(JSON.stringify({ error: 'ID de proyecto requerido.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      await sql`
        DELETE FROM projects
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
    console.error('Error in projects handler:', error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = {
  path: '/api/projects',
};
