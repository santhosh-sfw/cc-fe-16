import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyHammerGestureConfig, LY_THEME_NAME, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LyThemeModule, LY_THEME} from '@alyle/ui';
import { OnlyNumberDirective } from './directives/only-number/only-number.directive';
import { OnlyAlphabetDirective } from './directives/only-alphabet/only-alphabet.directive';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import { FieldFocusedDirective } from './directives/field-focused/field-focused.directive';
import { FocusInputDirective } from './directives/focus-input/focus-input.directive';
import { DatepickerLabelRaiseDirective } from './directives/datepicker-label-raise/datepicker-label-raise.directive';
import { CollapseDirective } from './directives/collapse/collapse.directive';
import { SidebarResponsiveDirective } from './directives/sidebar-responsive/sidebar-responsive.directive';
import { OverlayDirective } from './directives/overlay/overlay.directive';
import { DatePickerTriggerDirective } from './directives/date-picker-trigger/date-picker-trigger.directive';
import { RequirementDisplayDirective } from './directives/requirement-display/requirement-display.directive';
import { InitcapsPipe } from './pipes/initcaps/initcaps.pipe';
import { EllipsisPipePipe } from './pipes/ellipsis/ellipsis-pipe.pipe';
import { HighlightKeywordPipe } from './pipes/highlight-keyword/highlight-keyword.pipe';
import { LinkifyPipe } from './pipes/linkify/linkify.pipe';
import { SkipUnderscorePipe } from './pipes/skip-underscore/skip-underscore.pipe';
import { XmlifyPipe } from './pipes/xmlify/xmlify.pipe';
import { NewHighlightPipe } from './pipes/new-highlight/new-highlight.pipe';
import { FormatDatePipe } from './pipes/format-date/format-date.pipe';
import { DaysAgoPipe } from './pipes/days-ago/days-ago.pipe';
import { ClFieldDisplayMappingPipe } from './pipes/cl-field-display-mapping/cl-field-display-mapping.pipe';
import { SafePipe } from './pipes/safe/safe.pipe';
import { ExpandArrayPipe } from './pipes/expand-array/expand-array.pipe';

export const createTranslateHttpLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumberDirective,
    OnlyAlphabetDirective,
    ClickOutsideDirective,
    FieldFocusedDirective,
    FocusInputDirective,
    DatepickerLabelRaiseDirective,
    CollapseDirective,
    SidebarResponsiveDirective,
    OverlayDirective,
    DatePickerTriggerDirective,
    RequirementDisplayDirective,
    InitcapsPipe,
    EllipsisPipePipe,
    HighlightKeywordPipe,
    LinkifyPipe,
    SkipUnderscorePipe,
    XmlifyPipe,
    NewHighlightPipe,
    FormatDatePipe,
    DaysAgoPipe,
    ClFieldDisplayMappingPipe,
    SafePipe,
    ExpandArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateHttpLoader),
          deps: [HttpClient]
      }
  }),
  LyThemeModule.setTheme('minima-light'),
  AppRoutingModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
