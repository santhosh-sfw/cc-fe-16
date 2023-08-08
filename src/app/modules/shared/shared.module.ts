import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MomentModule } from 'ngx-moment';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { CalendarModule, DateAdapter as CalendarDateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { LY_THEME } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { Overlay, CloseScrollStrategy } from '@angular/cdk/overlay';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import {
    PerfectScrollbarConfigInterface, PerfectScrollbarDirective, PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,

};


export class AppDateAdapter extends MomentDateAdapter {
    override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
        return super.getDayOfWeekNames(style).map(item => item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase());
    }
}

export function scrollFactory(overlay: Overlay): () => CloseScrollStrategy {
    return () => overlay.scrollStrategies.close();
}


@NgModule({
    declarations: [
    ],
    providers: [
        {
            provide: MAT_DATEPICKER_SCROLL_STRATEGY,
            useFactory: scrollFactory,
            deps: [Overlay]
        },
        {
            provide: MAT_SELECT_SCROLL_STRATEGY,
            useFactory: scrollFactory,
            deps: [Overlay]
        },
        {
            provide: LY_THEME,
            useClass: MinimaLight,
            multi: true
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: DateAdapter, useClass: AppDateAdapter, deps: [MAT_DATE_LOCALE] },
        {
            provide: MAT_DATE_FORMATS, useValue: {
                parse: {
                    dateInput: 'LL',
                },
                display: {
                    dateInput: 'LL',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            }
        },
    ],
    imports: [
        MomentModule,
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        MatInputModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatButtonModule,
        CalendarModule.forRoot({
            provide: CalendarDateAdapter,
            useFactory: adapterFactory
        }),
        MatSliderModule,
        MatFormFieldModule,
        MatSelectModule,
        DragDropModule,
        RouterModule,
        LyImageCropperModule,
        NgxPaginationModule,
        MatAutocompleteModule,
        NgxMatSelectSearchModule,
    ],
    exports: [],
    entryComponents: [
        // ModalBigComponent,
        // ProfilePictureModalComponent,
        // ModalSmallComponent
    ]
})
export class SharedModule {
}
