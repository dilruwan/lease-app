export interface ILease {
    key: string;
    id: string;
    tenant: string;
}

export interface ILeaseDetails {
    id: string;
    start_date: Date;
    end_date: Date;
    rent: number;
    frequency: string;
    payment_day: string;
}

export interface ILeasesProps {
    leases: any[];
    isLoading: boolean;
}

export interface ILeaseDetailsProps {
    leaseDetails: Object;
    isLoading: boolean;
}

export interface IGetLeases {
    type: string;
    isLoading: boolean;
    payload: any[],
}

export interface IGetLeaseDetails {
    type: string;
    isLoading: boolean;
    payload: object,
}