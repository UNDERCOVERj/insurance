<template>
	<section class="second">		
		<article class="start">
			<span class="left">开始时间</span>
			<div class="right">
				<span>{{startTimeText}}</span>
				<i class="fa fa-calendar" aria-hidden="true" @click = "openStartPicker"></i>
			</div>
			<div class="clearfix"></div>
			<mt-datetime-picker
		    	ref="start"
		    	type="date"
		    	v-model="startTime"
		    	:startDate="pickerTime.start"
		    	:endDate="pickerTime.end"
		    	@confirm="changeStartTime">
		    </mt-datetime-picker>
		</article>
		<article class="end">
			<span class="left">结束时间</span>
			<div class="right">
				<span>{{endTimeText}}</span>
				<i class="fa fa-calendar" aria-hidden="true" @click = "openEndPicker"></i>
			</div>
			<div class="clearfix"></div>
			<mt-datetime-picker
		    	ref="end"
		    	type="date"
		    	v-model="endTime"
		    	:startDate="pickerTime.start"
		    	:endDate="pickerTime.end"
		    	@confirm="changeEndTime">
		    </mt-datetime-picker>
		</article>
	</section>
	<section class="third">
		<nav>
			<router-link v-for="(item,index) in navInfo" :to="item.path" tag="span" class="navSpan" :key="index">{{item.value}}</router-link>
		</nav>
		<router-view></router-view>
	</section>
	<section class="fourth">
		<mt-radio
			title="投保公司"
			v-model="company"
			:options="['平安', '大地']">
		</mt-radio>
	</section>
	<footBtn :path="'/order'" :text="'￥'+price+' 立即投保'"></footBtn>
</template>