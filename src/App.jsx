import { useState } from 'react'

function App() {

  const doctors = [
    { id: '87364523', name: 'Brooklyn Simmons', specialty: 'Dermatologists', email: 'brooklyns@mail.com', phone: '(603) 555-0123', dateAdded: '21/12/2022', status: 'Approved' },
    { id: '93874563', name: 'Kristin Watson', specialty: 'Infectious disease', email: 'kristinw@mail.com', phone: '(219) 555-0114', dateAdded: '22/12/2022', status: 'Declined' },
    { id: '23847569', name: 'Jacob Jones', specialty: 'Ophthalmologists', email: 'jacobjj@mail.com', phone: '(319) 555-0115', dateAdded: '23/12/2022', status: 'Approved' },
    { id: '39485632', name: 'Cody Fisher', specialty: 'Cardiologists', email: 'codyf@mail.com', phone: '(229) 555-0109', dateAdded: '24/12/2022', status: 'Approved' },
  ]

  const [count, setCount] = useState(0)

  let style = `
  body {
    margin: 0;
  }

  .container {
    background-color: #f3f4f6;
    min-height: 100vh;
  }
  .header {
    background-color: #1b4332;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  .nav a {
    color: white;
    text-decoration: none;
    margin-right: 1.5rem;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  .active {
    font-weight: 600;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 2rem;
    height: 2rem;
    background-color: #2d6a4f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }
  .main {
    padding: 1.5rem;
  }
  .breadcrumb {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }
  .breadcrumb span {
    margin-right: 0.5rem;
  }
  .breadcrumb .active {
    font-weight: 600;
  }
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .add-button {
    background-color: #2d6a4f;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .table {
    width: 100%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-collapse: collapse;
  }
  .table th, .table td {
    padding: 1rem;
    text-align: left;
  }
  .doctor-info {
    display: flex;
    align-items: center;
  }
  .doctor-avatar {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #e5e7eb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
  }
  .specialty {
    font-size: 0.875rem;
    color: #6b7280;
  }
  .status {
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  .approved {
    background-color: #d1fae5;
    color: #065f46;
  }
  .declined {
    background-color: #fee2e2;
    color: #991b1b;
  }
  .more-button {
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
  }
`;

  return (
    <>
    <style>{style}</style>
    <div className="container">
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">+</a>
          <a href="#" className="active">Users</a>
          <a href="#">Patients</a>
          <a href="#">Hospitals</a>
          <a href="#">Notice</a>
          <a href="#">Help Center</a>
        </nav>
        <div className="user-info">
          <span>Marvin McKinney</span>
          <div className="avatar">M</div>
        </div>
      </header>
      <main className="main">
        <div className="breadcrumb">
          <span className="active">Doctor</span>
          <span>Administration</span>
          <span>Accounts</span>
        </div>
        <div className="list-header">
          <h2>List of doctors</h2>
          <span>346 available doctors</span>
          <button className="add-button">+ Add new doctor</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Date added</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <div className="doctor-info">
                    <div className="doctor-avatar">{doctor.name[0]}</div>
                    <div>
                      <div>{doctor.name}</div>
                      <div className="specialty">{doctor.specialty}</div>
                    </div>
                  </div>
                </td>
                <td>{doctor.id}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.dateAdded}</td>
                <td>
                  <span className={`status ${doctor.status === 'Approved' ? 'approved' : 'declined'}`}>
                    {doctor.status}
                  </span>
                </td>
                <td>
                  <button className="more-button">{'>'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    </>
  )
}

export default App
