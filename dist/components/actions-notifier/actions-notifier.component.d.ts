import { Notifier } from '../../services/notifier.service';
export declare class ActionsNotifierComponent {
    private notifier;
    visible: any;
    message: any;
    classes: any;
    title: any;
    actions: any;
    onClose: any;
    address: any;
    constructor(notifier: Notifier);
    ngOnInit(): void;
    close(): void;
    ngOnDestroy(): void;
}
