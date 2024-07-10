// endpoints.js
const patientsEndpoints = {
    allPatients: '/patients',
};

const vitalsEndpoints = {
    allVitals: '/vitals',
};

const billEndpoints = {
    allBills: '/bill',
};

const consultationEndpoints = {
    allConsultations: './consultation',
};

const employeesEndpoints = {
    allEmployees: './employees',
};

const labEndpoints = {
    allLabs: './lab',
};

const prescriptionsEndpoints = {
    allPrescriptions: '/prescriptions',
};

const bookingsEndpoints = {
    allBookings: './bookings',
};

// Combine all endpoint objects into a single export
const allEndpoints = {
    ...patientsEndpoints,
    ...vitalsEndpoints,
    ...billEndpoints,
    ...consultationEndpoints,
    ...employeesEndpoints,
    ...labEndpoints,
    ...prescriptionsEndpoints,
    ...bookingsEndpoints,
};

module.exports = allEndpoints;
