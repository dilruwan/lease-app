import { getLeases, getLeaseDetails } from '../src/services/service';

test('getLeases should fetch successfully data from an API', async () => {
    return await getLeases().then(response => {
        expect(response).toHaveProperty('data');
        expect(Array.isArray(response.data)).toBe(true);

        return response.data.map((lease) => {
            expect(lease).toHaveProperty('id');
            expect(typeof lease.id).toBe('string');
            expect(lease).toHaveProperty('tenant');
            expect(typeof lease.tenant).toBe('string');
        });
    });
});

test('getLeaseDetails should fetch successfully data from an API', async () => {
    let id = 'lease-a';
    return await getLeaseDetails(id).then(response => {
        expect(response).toHaveProperty('data');
        expect(typeof response.data).toBe('object');

        expect(response.data).toHaveProperty('id');
        expect(typeof response.data.id).toBe('string');

        expect(response.data).toHaveProperty('start_date');
        expect(typeof response.data.start_date).toBe('string');

        expect(response.data).toHaveProperty('end_date');
        expect(typeof response.data.end_date).toBe('string');

        expect(response.data).toHaveProperty('rent');
        expect(typeof response.data.rent).toBe('number');

        expect(response.data).toHaveProperty('frequency');
        expect(typeof response.data.frequency).toBe('string');

        expect(response.data).toHaveProperty('payment_day');
        expect(typeof response.data.payment_day).toBe('string');
    });
});

