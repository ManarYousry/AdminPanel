import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { HeaderComponent } from '../../component/header/header.component';
import { SubHeaderComponent } from '../../component/sub-header/sub-header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { LayoutComponent } from '../../component/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteMsgComponent } from '../../component/delete-msg/delete-msg.component';
import { EditComponent } from 'src/app/component/edit/edit.component';
import { ArchiveComponent } from 'src/app/component/archive/archive.component';
import { DetailedEngineerReportComponent } from 'src/app/component/detailed-engineer-report/detailed-engineer-report.component';
import { DetailedShiftReportComponent } from 'src/app/component/detailed-shift-report/detailed-shift-report.component';
import { DetailedTeamReportComponent } from 'src/app/component/detailed-team-report/detailed-team-report.component';
import { DetailedSectionReportComponent } from 'src/app/component/detailed-section-report/detailed-section-report.component';
import { TrendSectionReportComponent } from 'src/app/component/trend-section-report/trend-section-report.component';
import { TrendTeamReportComponent } from 'src/app/component/trend-team-report/trend-team-report.component';
import { TrendShiftReportComponent } from 'src/app/component/trend-shift-report/trend-shift-report.component';
import { TrendEngineerReportComponent } from 'src/app/component/trend-engineer-report/trend-engineer-report.component';
import { SummaryEngineerReportComponent } from 'src/app/component/summary-engineer-report/summary-engineer-report.component';
import { SummaryShiftReportComponent } from 'src/app/component/summary-shift-report/summary-shift-report.component';
import { SummaryTeamReportComponent } from 'src/app/component/summary-team-report/summary-team-report.component';
import { SummarySectionReportComponent } from 'src/app/component/summary-section-report/summary-section-report.component';
import { BanchmarkSectionhistoryReportComponent } from 'src/app/component/banchmark-sectionhistory-report/banchmark-sectionhistory-report.component';
import { BanchmarkTeamhistoryReportComponent } from 'src/app/component/banchmark-teamhistory-report/banchmark-teamhistory-report.component';
import { BanchmarkReportComponent } from 'src/app/component/banchmark-report/banchmark-report.component';
import { ComparisonReportComponent } from 'src/app/component/comparison-report/comparison-report.component';
import { SummaryReportComponent } from 'src/app/component/summary-report/summary-report.component';
import { TrendReportComponent } from 'src/app/component/trend-report/trend-report.component';
import { DetailedReportComponent } from 'src/app/component/detailed-report/detailed-report.component';
import { BenchmarkEngineerComponent } from 'src/app/component/benchmark-engineer/benchmark-engineer.component';
import { BenchmarkComponent } from 'src/app/component/benchmark/benchmark.component';
import { BestReportComponent } from 'src/app/component/best-report/best-report.component';
import { TotalEvaluationComponent } from 'src/app/component/total-evaluation/total-evaluation.component';
import { EvaluatorDailyStatComponent } from 'src/app/component/evaluator-daily-stat/evaluator-daily-stat.component';
import { EvaluatorMonthStatComponent } from 'src/app/component/evaluator-month-stat/evaluator-month-stat.component';
import { EngineerStatisticComponent } from 'src/app/component/engineer-statistic/engineer-statistic.component';
import { EngineerEvaluationComponent } from 'src/app/component/engineer-evaluation/engineer-evaluation.component';
import { DistributeEvaluatorComponent } from 'src/app/component/distribute-evaluator/distribute-evaluator.component';
import { EngineerIncludeComponent } from 'src/app/component/engineer-include/engineer-include.component';
import { EvaluateSampleComponent } from 'src/app/component/evaluate-sample/evaluate-sample.component';
import { ReEvaluateComponent } from 'src/app/component/re-evaluate/re-evaluate.component';
import { ReEvaluationReportComponent } from 'src/app/component/re-evaluation-report/re-evaluation-report.component';
import { ViewPendingComponent } from 'src/app/component/view-pending/view-pending.component';
import { ViewResultComponent } from 'src/app/component/view-result/view-result.component';
import { PendingComponent } from 'src/app/component/pending/pending.component';
import { EvaluationComponent } from 'src/app/component/evaluation/evaluation.component';
import { EvaluatorStatisticsComponent } from 'src/app/component/evaluator-statistics/evaluator-statistics.component';
import { SearchUNIIDComponent } from 'src/app/component/search-uni-id/search-uni-id.component';
import { SearchSerialComponent } from 'src/app/component/search-serial/search-serial.component';
import { SearchUniqKeyComponent } from 'src/app/component/search-uniq-key/search-uniq-key.component';
import { ResultComponent } from 'src/app/component/result/result.component';
import { UpdateSampleComponent } from 'src/app/Forms/update-sample/update-sample.component';
import { UpdateShiftComponent } from 'src/app/Forms/update-shift/update-shift.component';
import { AddnewEngineerComponent } from 'src/app/Forms/addnew-engineer/addnew-engineer.component';
import { UpdateArchiveComponent } from 'src/app/Forms/update-archive/update-archive.component';
import { ChartsModule } from 'ng2-charts';
import { LoaderComponent } from '../../component/loader/loader.component';




@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    SidebarComponent,
    DeleteMsgComponent,
    EditComponent,
    ResultComponent,
    SearchUniqKeyComponent,
    SearchSerialComponent,
    SearchUNIIDComponent,
    EvaluatorStatisticsComponent,
    EvaluationComponent,
    PendingComponent,
    ViewResultComponent,
    ViewPendingComponent,
    ReEvaluationReportComponent,
    ReEvaluateComponent,
    EvaluateSampleComponent,
    EngineerIncludeComponent,
    DistributeEvaluatorComponent,
    EngineerEvaluationComponent,
    EngineerStatisticComponent,
    EvaluatorMonthStatComponent,
    EvaluatorDailyStatComponent,
    TotalEvaluationComponent,
    BestReportComponent,
    BenchmarkComponent,
    BenchmarkEngineerComponent,
    DetailedReportComponent,
    TrendReportComponent,
    SummaryReportComponent,
    ComparisonReportComponent,
    BanchmarkReportComponent,
    BanchmarkTeamhistoryReportComponent,
    BanchmarkSectionhistoryReportComponent,
    SummarySectionReportComponent,
    SummaryTeamReportComponent,
    SummaryShiftReportComponent,
    SummaryEngineerReportComponent,
    TrendEngineerReportComponent,
    TrendShiftReportComponent,
    TrendTeamReportComponent,
    TrendSectionReportComponent,
    DetailedSectionReportComponent,
    DetailedTeamReportComponent,
   DetailedShiftReportComponent,
    DetailedEngineerReportComponent,
    ArchiveComponent,
    UpdateSampleComponent,
    UpdateShiftComponent,
    AddnewEngineerComponent,
    UpdateArchiveComponent,
    LoaderComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ChartsModule
  
  
   
  ]
})
export class LayoutModule { }
