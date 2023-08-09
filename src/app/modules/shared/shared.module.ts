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
import { RequirementDetailsComponent } from 'src/app/common/requirement-details/requirement-details.component';
import { AddDeptCaroselComponent } from 'src/app/common/add-dept-carosel/add-dept-carosel.component';
import { CarousalComponent } from 'src/app/common/carousal/carousal.component';
import { ChatWidgetComponent } from 'src/app/common/chat-widget/chat-widget.component';
import { ComplianceLibComponent } from 'src/app/common/compliance-lib/compliance-lib.component';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { ModalSmallComponent } from 'src/app/common/modal-small/modal-small.component';
import { MonthPickerComponent } from 'src/app/common/month-picker/month-picker.component';
import { OnboardCaroselComponent } from 'src/app/common/onboard-carosel/onboard-carosel.component';
import { ProfilePictureModalComponent } from 'src/app/common/profile-picture-modal/profile-picture-modal.component';
import { SearchComplianceContainerComponent } from 'src/app/common/search-compliance-container/search-compliance-container.component';
import { SearchComplianceLibraryComponent } from 'src/app/common/search-compliance-library/search-compliance-library.component';
import { SideNavComponent } from 'src/app/common/side-nav/side-nav.component';
import { AmendmentCarouselComponent } from 'src/app/common/amendment-carousel/amendment-carousel.component';
import { ComplianceSearchLibComponent } from 'src/app/common/compliance-search-lib/compliance-search-lib.component';
import { ScrollTabComponent } from 'src/app/common/scroll-tab/scroll-tab.component';
import { GapAnalysisBmComponent } from '../BM/gap-analysis-bm/gap-analysis-bm.component';
import { BusinessImpactPmComponent } from '../PM/business-impact-pm/business-impact-pm.component';
import { OverallComponent } from '../PM/business-impact-pm/overall/overall.component';
import { RequirementWiseComponent } from '../PM/business-impact-pm/requirement-wise/requirement-wise.component';
import { GapAnalysisPmComponent } from '../PM/gap-analysis-pm/gap-analysis-pm.component';




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
        RequirementDetailsComponent,
        ProfilePictureModalComponent,
        HeaderComponent,
        SideNavComponent,
        ModalSmallComponent,
        CarousalComponent,
        OnboardCaroselComponent,
        SearchComplianceContainerComponent,
        AddDeptCaroselComponent,
        ComplianceLibComponent,
        SearchComplianceLibraryComponent,
        ChatWidgetComponent,
        MonthPickerComponent,
        GapAnalysisPmComponent,
        BusinessImpactPmComponent,
        OverallComponent,
        AmendmentCarouselComponent,
        GapAnalysisBmComponent,
        ScrollTabComponent,
        ComplianceSearchLibComponent,
        RequirementWiseComponent
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
